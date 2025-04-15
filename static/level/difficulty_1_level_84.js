/**
 * 难度1-关卡84配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 84,
  name: '新手入门-第84关',
  description: '挑战第84关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 12), // 使用前12种类型的卡片
  cardsPerType: 51,
  maxSlots: 10,
  timeLimit: 120,
  maxLayers: 7,
  difficulty: 1
};
