/**
 * 难度1-关卡41配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 41,
  name: '新手入门-第41关',
  description: '挑战第41关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 8), // 使用前8种类型的卡片
  cardsPerType: 27,
  maxSlots: 8,
  timeLimit: 140,
  maxLayers: 6,
  difficulty: 1
};
