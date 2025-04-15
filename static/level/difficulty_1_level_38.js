/**
 * 难度1-关卡38配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 38,
  name: '新手入门-第38关',
  description: '挑战第38关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 7), // 使用前7种类型的卡片
  cardsPerType: 24,
  maxSlots: 7,
  timeLimit: 143,
  maxLayers: 6,
  difficulty: 1
};
