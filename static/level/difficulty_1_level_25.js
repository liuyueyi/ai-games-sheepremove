/**
 * 难度1-关卡25配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 25,
  name: '新手入门-第25关',
  description: '挑战第25关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 6), // 使用前6种类型的卡片
  cardsPerType: 15,
  maxSlots: 8,
  timeLimit: 156,
  maxLayers: 5,
  difficulty: 1
};
