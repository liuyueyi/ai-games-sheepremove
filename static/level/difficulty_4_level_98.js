/**
 * 难度4-关卡98配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 98,
  name: '高级挑战-第98关',
  description: '挑战第98关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 12), // 使用前12种类型的卡片
  cardsPerType: 72,
  maxSlots: 10,
  timeLimit: 100,
  maxLayers: 18,
  gridRows: 6,
  gridCols: 8,
  difficulty: 4
};
