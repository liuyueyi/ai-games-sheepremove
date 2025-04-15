/**
 * 难度2-关卡17配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 17,
  name: '初级挑战-第17关',
  description: '挑战第17关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 7), // 使用前7种类型的卡片
  cardsPerType: 5,
  maxSlots: 6,
  timeLimit: 144,
  maxLayers: 5,
  difficulty: 2
};
