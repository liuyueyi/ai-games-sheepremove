/**
 * 难度2-关卡2配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 2,
  name: '初级挑战-第2关',
  description: '挑战第2关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 6), // 使用前6种类型的卡片
  cardsPerType: 12,
  maxSlots: 7,
  timeLimit: 159,
  maxLayers: 8,
  gridRows: 4,
  gridCols: 6,
  difficulty: 2
};
