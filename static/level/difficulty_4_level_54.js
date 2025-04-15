/**
 * 难度4-关卡54配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 54,
  name: '高级挑战-第54关',
  description: '挑战第54关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 11), // 使用前11种类型的卡片
  cardsPerType: 45,
  maxSlots: 9,
  timeLimit: 107,
  maxLayers: 10,
  gridRows: 6,
  gridCols: 8,
  difficulty: 4
};
