/**
 * 难度2-关卡50配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 50,
  name: '初级挑战-第50关',
  description: '挑战第50关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 10), // 使用前10种类型的卡片
  cardsPerType: 36,
  maxSlots: 9,
  timeLimit: 111,
  maxLayers: 10,
  gridRows: 5,
  gridCols: 7,
  difficulty: 2
};
