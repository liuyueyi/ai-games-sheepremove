/**
 * 难度1-关卡29配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 29,
  name: '新手入门-第29关',
  description: '挑战第29关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 6), // 使用前6种类型的卡片
  cardsPerType: 4,
  maxSlots: 7,
  timeLimit: 152,
  maxLayers: 5,
  difficulty: 1
};
