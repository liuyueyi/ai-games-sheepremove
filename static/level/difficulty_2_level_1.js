/**
 * 难度2-关卡1配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 1,
  name: '初级挑战-第1关',
  description: '挑战第1关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 6), // 使用前6种类型的卡片
  cardsPerType: 12,
  maxSlots: 7,
  timeLimit: 160,
  maxLayers: 8,
  gridRows: 4,
  gridCols: 6,
  difficulty: 2
};
