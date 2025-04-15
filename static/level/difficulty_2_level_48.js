/**
 * 难度2-关卡48配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 48,
  name: '初级挑战-第48关',
  description: '挑战第48关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 10), // 使用前10种类型的卡片
  cardsPerType: 36,
  maxSlots: 9,
  timeLimit: 113,
  maxLayers: 10,
  gridRows: 5,
  gridCols: 7,
  difficulty: 2
};
