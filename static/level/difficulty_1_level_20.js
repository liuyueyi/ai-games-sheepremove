/**
 * 难度1-关卡20配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 20,
  name: '新手入门-第20关',
  description: '挑战第20关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 5), // 使用前5种类型的卡片
  cardsPerType: 4,
  maxSlots: 6,
  timeLimit: 161,
  maxLayers: 4,
  difficulty: 1
};
