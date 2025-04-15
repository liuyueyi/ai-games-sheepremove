/**
 * 难度2-关卡63配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 63,
  name: '初级挑战-第63关',
  description: '挑战第63关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 12), // 使用前12种类型的卡片
  cardsPerType: 45,
  maxSlots: 10,
  timeLimit: 100,
  maxLayers: 12,
  gridRows: 6,
  gridCols: 8,
  difficulty: 2
};
