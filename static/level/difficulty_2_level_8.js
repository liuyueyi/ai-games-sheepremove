/**
 * 难度2-关卡8配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 8,
  name: '初级挑战-第8关',
  description: '挑战第8关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 6), // 使用前6种类型的卡片
  cardsPerType: 4,
  maxSlots: 6,
  timeLimit: 153,
  maxLayers: 4,
  difficulty: 2
};
