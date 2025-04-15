/**
 * 难度1-关卡7配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 7,
  name: '新手入门-第7关',
  description: '挑战第7关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 4), // 使用前4种类型的卡片
  cardsPerType: 6,
  maxSlots: 6,
  timeLimit: 174,
  maxLayers: 3,
  difficulty: 1
};
