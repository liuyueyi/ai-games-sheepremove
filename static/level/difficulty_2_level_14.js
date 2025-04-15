/**
 * 难度2-关卡14配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 14,
  name: '初级挑战-第14关',
  description: '挑战第14关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 7), // 使用前7种类型的卡片
  cardsPerType: 15,
  maxSlots: 7,
  timeLimit: 147,
  maxLayers: 8,
  gridRows: 4,
  gridCols: 6,
  difficulty: 2
};
