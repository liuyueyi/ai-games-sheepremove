/**
 * 难度2-关卡49配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 49,
  name: '初级挑战-第49关',
  description: '挑战第49关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 10), // 使用前10种类型的卡片
  cardsPerType: 36,
  maxSlots: 8,
  timeLimit: 112,
  maxLayers: 7,
  difficulty: 2
};
