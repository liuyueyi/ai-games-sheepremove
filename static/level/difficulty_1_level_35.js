/**
 * 难度1-关卡35配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 35,
  name: '新手入门-第35关',
  description: '挑战第35关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 7), // 使用前7种类型的卡片
  cardsPerType: 21,
  maxSlots: 7,
  timeLimit: 146,
  maxLayers: 5,
  difficulty: 1
};
