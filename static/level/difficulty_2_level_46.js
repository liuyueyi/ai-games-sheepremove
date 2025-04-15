/**
 * 难度2-关卡46配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 46,
  name: '初级挑战-第46关',
  description: '挑战第46关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 10), // 使用前10种类型的卡片
  cardsPerType: 6,
  maxSlots: 8,
  timeLimit: 115,
  maxLayers: 7,
  difficulty: 2
};
