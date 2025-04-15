/**
 * 难度1-关卡49配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 49,
  name: '新手入门-第49关',
  description: '挑战第49关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 8), // 使用前8种类型的卡片
  cardsPerType: 30,
  maxSlots: 9,
  timeLimit: 132,
  maxLayers: 7,
  difficulty: 1
};
