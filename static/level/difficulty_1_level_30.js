/**
 * 难度1-关卡30配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 30,
  name: '新手入门-第30关',
  description: '挑战第30关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 6), // 使用前6种类型的卡片
  cardsPerType: 18,
  maxSlots: 7,
  timeLimit: 151,
  maxLayers: 5,
  difficulty: 1
};
