/**
 * 难度1-关卡33配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 33,
  name: '新手入门-第33关',
  description: '挑战第33关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 7), // 使用前7种类型的卡片
  cardsPerType: 5,
  maxSlots: 7,
  timeLimit: 148,
  maxLayers: 5,
  difficulty: 1
};
