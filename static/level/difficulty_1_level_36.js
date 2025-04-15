/**
 * 难度1-关卡36配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 36,
  name: '新手入门-第36关',
  description: '挑战第36关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 7), // 使用前7种类型的卡片
  cardsPerType: 24,
  maxSlots: 8,
  timeLimit: 145,
  maxLayers: 7,
  gridRows: 5,
  gridCols: 7,
  difficulty: 1
};
