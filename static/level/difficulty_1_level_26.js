/**
 * 难度1-关卡26配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 26,
  name: '新手入门-第26关',
  description: '挑战第26关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 6), // 使用前6种类型的卡片
  cardsPerType: 4,
  maxSlots: 7,
  timeLimit: 155,
  maxLayers: 5,
  difficulty: 1
};
