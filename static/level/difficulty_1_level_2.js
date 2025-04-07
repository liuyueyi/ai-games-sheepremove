/**
 * 难度1-关卡2配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 2,
  name: '新手入门-第2关',
  description: '继续熟悉游戏规则，难度略有提升',
  cardTypes: CARD_TYPES.slice(0, 4), // 使用前4种类型的卡片
  cardsPerType: 4,
  maxSlots: 6,
  timeLimit: 170,
  maxLayers: 3,
  difficulty: 1
};