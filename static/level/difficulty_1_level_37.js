/**
 * 难度1-关卡37配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 37,
  name: '新手入门-第37关',
  description: '挑战第37关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 7), // 使用前7种类型的卡片
  cardsPerType: 24,
  maxSlots: 8,
  timeLimit: 144,
  maxLayers: 7,
  gridRows: 5,
  gridCols: 7,
  difficulty: 1
};
