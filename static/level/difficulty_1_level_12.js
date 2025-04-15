/**
 * 难度1-关卡12配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 12,
  name: '新手入门-第12关',
  description: '挑战第12关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 5), // 使用前5种类型的卡片
  cardsPerType: 9,
  maxSlots: 7,
  timeLimit: 169,
  maxLayers: 3,
  difficulty: 1
};
