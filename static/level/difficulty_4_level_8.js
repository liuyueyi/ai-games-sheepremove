/**
 * 难度4-关卡8配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 8,
  name: '高级挑战-第8关',
  description: '挑战第8关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 6), // 使用前6种类型的卡片
  cardsPerType: 18,
  maxSlots: 7,
  timeLimit: 153,
  maxLayers: 8,
  gridRows: 5,
  gridCols: 7,
  difficulty: 4
};
