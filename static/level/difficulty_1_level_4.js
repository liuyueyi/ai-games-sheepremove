/**
 * 难度1-关卡4配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 4,
  name: '新手入门-第4关',
  description: '挑战第4关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 4), // 使用前4种类型的卡片
  cardsPerType: 6,
  maxSlots: 7,
  timeLimit: 177,
  maxLayers: 3,
  difficulty: 1
};
