/**
 * 难度5-关卡10配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 10,
  name: '大师级-第10关',
  description: '挑战第10关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 6), // 使用前6种类型的卡片
  cardsPerType: 21,
  maxSlots: 6,
  timeLimit: 151,
  maxLayers: 4,
  difficulty: 5
};
