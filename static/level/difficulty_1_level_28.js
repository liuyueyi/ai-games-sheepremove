/**
 * 难度1-关卡28配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 28,
  name: '新手入门-第28关',
  description: '挑战第28关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 6), // 使用前6种类型的卡片
  cardsPerType: 18,
  maxSlots: 8,
  timeLimit: 153,
  maxLayers: 5,
  difficulty: 1
};
