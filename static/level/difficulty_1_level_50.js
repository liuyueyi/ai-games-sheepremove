/**
 * 难度1-关卡50配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 50,
  name: '新手入门-第50关',
  description: '挑战第50关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 8), // 使用前8种类型的卡片
  cardsPerType: 30,
  maxSlots: 9,
  timeLimit: 131,
  maxLayers: 7,
  difficulty: 1
};
