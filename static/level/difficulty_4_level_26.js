/**
 * 难度4-关卡26配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 26,
  name: '高级挑战-第26关',
  description: '挑战第26关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 8), // 使用前8种类型的卡片
  cardsPerType: 30,
  maxSlots: 7,
  timeLimit: 135,
  maxLayers: 6,
  difficulty: 4
};
