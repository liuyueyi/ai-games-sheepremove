/**
 * 难度1-关卡76配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 76,
  name: '新手入门-第76关',
  description: '挑战第76关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 11), // 使用前11种类型的卡片
  cardsPerType: 48,
  maxSlots: 9,
  timeLimit: 120,
  maxLayers: 7,
  difficulty: 1
};
