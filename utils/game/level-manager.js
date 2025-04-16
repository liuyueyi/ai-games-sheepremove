/**
 * 关卡管理器
 * 负责加载和管理游戏关卡
 */

import { getDifficultyConfig } from './difficulties.js';
import LEVELS from '/static/level/levels.json';

/**
 * 加载关卡配置
 * @param {Number} difficultyId 难度ID
 * @param {Number} levelNumber 关卡编号

/**
 * 加载关卡配置
 * @param {Number} difficultyId 难度ID
 * @param {Number} levelNumber 关卡编号
 * @returns {Promise<Object>} 关卡配置对象
 */
export function loadLevelConfig(difficultyId, levelNumber) {
  try {
    // 获取难度配置
    const difficultyConfig = getDifficultyConfig(difficultyId);
    console.log('难度配置:', difficultyConfig); // 添加此行以打印难度配置

    // 检查关卡编号是否有效
    if (levelNumber < 1 || levelNumber > difficultyConfig.levelCount) {
      console.error(`关卡编号无效: ${levelNumber}, 难度 ${difficultyId} 的最大关卡数为 ${difficultyConfig.levelCount}`);
      // 默认返回第一关
      levelNumber = 1;
    }

    // 根据难度和关卡编号生成配置
    const levelInfo =  LEVELS[difficultyId + ""][levelNumber - 1];
    console.log('关卡信息:', levelInfo); // 添加此行以打印关卡信息
    return levelInfo;
  } catch (error) {
    console.error('加载关卡配置失败:', error);
    // 返回一个默认配置
    return {
      id: levelNumber,
      name: `默认关卡 ${levelNumber}`,
      description: '配置加载失败，使用默认配置',
      cardTypes: [],
      cardsPerType: 3,
      maxSlots: 7,
      timeLimit: 180,
      maxLayers: 3,
      difficulty: difficultyId
    };
  }
}

/**
 * 获取下一关卡编号
 * @param {Number} difficultyId 当前难度ID
 * @param {Number} currentLevelNumber 当前关卡编号
 * @returns {Object} 包含下一关信息的对象 {difficultyId, levelNumber}
 */
export function getNextLevel(difficultyId, currentLevelNumber) {
  const difficultyConfig = getDifficultyConfig(difficultyId);

  // 如果当前关卡不是该难度的最后一关，返回下一关
  if (currentLevelNumber < difficultyConfig.levelCount) {
    return {
      difficultyId,
      levelNumber: currentLevelNumber + 1
    };
  }

  // 如果是该难度的最后一关，尝试进入下一个难度的第一关
  const nextDifficultyId = difficultyId + 1;
  const nextDifficultyConfig = getDifficultyConfig(nextDifficultyId);

  // 如果存在下一个难度，返回下一个难度的第一关
  if (nextDifficultyConfig && nextDifficultyConfig.id === nextDifficultyId) {
    return {
      difficultyId: nextDifficultyId,
      levelNumber: 1
    };
  }

  // 如果没有下一个难度，返回当前难度的最后一关（表示已经通关全部关卡）
  return {
    difficultyId,
    levelNumber: currentLevelNumber
  };
}

/**
 * 生成关卡卡片
 * @param {Object} levelConfig 关卡配置
 * @returns {Array} 卡片数据数组
 */
export function generateLevelCards(levelConfig) {
  const cards = [];
  let id = 1;
  levelConfig.cardTypes.forEach(type => {
    for (let i = 0; i < levelConfig.cardsPerType; i++) {
      cards.push({
        id: id++,
        typeId: type.id,
        icon: type.icon,
        name: type.name,
        isRemoved: false,
        zIndex: 0,
        position: { x: 0, y: 0 }
      });
    }
  });

  return cards;
}