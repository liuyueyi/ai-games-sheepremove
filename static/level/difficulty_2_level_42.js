/**
 * 难度2-关卡42配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 42,
  name: '初级挑战-第42关',
  description: '挑战第42关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 10), // 使用前10种类型的卡片
  cardsPerType: 33,
  maxSlots: 9,
  timeLimit: 119,
  maxLayers: 7,
  difficulty: 2
};
