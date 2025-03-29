/**
 * 游戏管理器
 * 用于管理羊了个羊游戏的核心逻辑和状态
 */

import { generateCards } from './cards.js';
import { generateLayout } from './layout-generator.js';

// 游戏状态枚举
export const GameStatus = {
  READY: 'ready',      // 准备开始
  PLAYING: 'playing',  // 游戏中
  WIN: 'win',          // 获胜
  LOSE: 'lose'         // 失败
};

/**
 * 游戏管理器类
 */
export class GameManager {
  constructor(config = {}) {
    // 游戏配置
    this.config = {
      cardTypes: 6,           // 卡片类型数量
      cardsPerType: 3,        // 每种类型的卡片数量
      maxSlots: 7,            // 最大槽位数量
      timeLimit: 180,         // 时间限制（秒）
      containerWidth: 750,    // 容器宽度（rpx）
      containerHeight: 750,   // 容器高度（rpx）
      cardWidth: 100,         // 卡片宽度（rpx）
      cardHeight: 120,        // 卡片高度（rpx）
      maxLayers: 5,           // 最大层数
      ...config
    };
    
    // 游戏状态
    this.status = GameStatus.READY;
    
    // 游戏数据
    this.cards = [];          // 所有卡片
    this.slots = [];          // 槽位
    this.score = 0;           // 分数
    this.remainingTime = 0;   // 剩余时间
    this.gameTime = 0;        // 游戏时间
    
    // 初始化游戏
    this.init();
  }
  
  /**
   * 初始化游戏
   */
  init() {
    // 重置游戏状态
    this.status = GameStatus.READY;
    this.score = 0;
    this.gameTime = 0;
    this.remainingTime = this.config.timeLimit;
    
    // 初始化槽位
    this.slots = Array(this.config.maxSlots).fill(null);
    
    // 生成卡片
    const cards = generateCards(
      this.config.cardTypes,
      this.config.cardsPerType
    );
    
    // 生成布局
    this.cards = generateLayout(cards, {
      containerWidth: this.config.containerWidth,
      containerHeight: this.config.containerHeight,
      cardWidth: this.config.cardWidth,
      cardHeight: this.config.cardHeight,
      maxLayers: this.config.maxLayers
    });
  }
  
  /**
   * 开始游戏
   */
  start() {
    if (this.status === GameStatus.READY) {
      this.status = GameStatus.PLAYING;
      return true;
    }
    return false;
  }
  
  /**
   * 更新游戏时间
   * @param {Number} deltaTime 时间增量（秒）
   */
  updateTime(deltaTime) {
    if (this.status !== GameStatus.PLAYING) return;
    
    this.gameTime += deltaTime;
    this.remainingTime -= deltaTime;
    
    // 检查时间是否用完
    if (this.remainingTime <= 0) {
      this.endGame(GameStatus.LOSE);
    }
  }
  
  /**
   * 选择卡片
   * @param {Object} card 选中的卡片
   * @returns {Boolean} 是否成功选择
   */
  selectCard(cardId) {
    if (this.status !== GameStatus.PLAYING) return false;
    
    // 查找卡片
    const card = this.cards.find(c => c.id === cardId);
    if (!card || card.isRemoved) return false;
    
    // 检查卡片是否被覆盖
    if (this.isCardCovered(card)) return false;
    
    // 查找空槽位
    const emptySlotIndex = this.slots.findIndex(slot => slot === null);
    if (emptySlotIndex === -1) {
      // 槽位已满，游戏结束
      this.endGame(GameStatus.LOSE);
      return false;
    }
    
    // 将卡片放入槽位
    this.slots[emptySlotIndex] = {
      id: card.id,
      typeId: card.typeId,
      icon: card.icon,
      name: card.name
    };
    
    // 标记卡片为已移除
    card.isRemoved = true;
    
    // 检查是否可以消除
    this.checkElimination();
    
    // 检查是否获胜
    this.checkWinCondition();
    
    return true;
  }
  
  /**
   * 检查卡片是否被其他卡片覆盖
   * @param {Object} card 要检查的卡片
   * @returns {Boolean} 是否被覆盖
   */
  isCardCovered(card) {
    // 获取当前卡片的位置和尺寸
    const { x, y } = card.position;
    const { cardWidth, cardHeight } = this.config;
    
    // 检查是否有更高层级的卡片覆盖了当前卡片
    return this.cards.some(otherCard => {
      // 跳过自身和已移除的卡片
      if (otherCard.id === card.id || otherCard.isRemoved) {
        return false;
      }
      
      // 只检查更高层级的卡片
      if (otherCard.zIndex <= card.zIndex) {
        return false;
      }
      
      // 检查是否有重叠
      const { x: otherX, y: otherY } = otherCard.position;
      return (
        otherX < x + cardWidth &&
        otherX + cardWidth > x &&
        otherY < y + cardHeight &&
        otherY + cardHeight > y
      );
    });
  }
  
  /**
   * 检查是否可以消除
   * @returns {Boolean} 是否有消除
   */
  checkElimination() {
    // 统计每种类型的卡片数量
    const typeCounts = {};
    this.slots.forEach(slot => {
      if (slot) {
        typeCounts[slot.typeId] = (typeCounts[slot.typeId] || 0) + 1;
      }
    });
    
    // 检查是否有三张相同类型的卡片
    let eliminated = false;
    Object.entries(typeCounts).forEach(([typeId, count]) => {
      if (count >= 3) {
        // 消除相同类型的卡片
        this.eliminateCards(parseInt(typeId));
        eliminated = true;
      }
    });
    
    // 如果有消除，增加分数
    if (eliminated) {
      this.score += 30;
    }
    
    return eliminated;
  }
  
  /**
   * 消除卡片
   * @param {Number} typeId 卡片类型ID
   */
  eliminateCards(typeId) {
    // 找出所有相同类型的卡片索引
    const indices = [];
    this.slots.forEach((slot, index) => {
      if (slot && slot.typeId === typeId) {
        indices.push(index);
      }
    });
    
    // 从槽位中移除卡片（最多移除3张）
    indices.slice(0, 3).forEach(index => {
      this.slots[index] = null;
    });
  }
  
  /**
   * 检查是否获胜
   * @returns {Boolean} 是否获胜
   */
  checkWinCondition() {
    // 检查是否所有卡片都已移除
    const allCardsRemoved = this.cards.every(card => card.isRemoved);
    
    // 如果所有卡片都已移除，游戏胜利
    if (allCardsRemoved) {
      this.endGame(GameStatus.WIN);
      return true;
    }
    
    return false;
  }
  
  /**
   * 结束游戏
   * @param {String} result 游戏结果
   */
  endGame(result) {
    this.status = result;
    
    // 如果胜利，增加额外分数
    if (result === GameStatus.WIN) {
      // 根据剩余时间增加额外分数
      const timeBonus = Math.floor(this.remainingTime / 10);
      this.score += timeBonus * 10;
    }
    
    return this.status;
  }
  
  /**
   * 获取游戏状态
   * @returns {Object} 游戏状态对象
   */
  getGameState() {
    return {
      status: this.status,
      cards: this.cards,
      slots: this.slots,
      score: this.score,
      remainingTime: this.remainingTime,
      gameTime: this.gameTime
    };
  }
}