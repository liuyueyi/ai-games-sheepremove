/**
 * 难度1-关卡16配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 16,
  name: '新手入门-第16关',
  description: '挑战第16关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 5), // 使用前5种类型的卡片
  cardsPerType: 12,
  maxSlots: 7,
  timeLimit: 165,
  maxLayers: 4,
  difficulty: 1
};
