/**
 * 难度1-关卡17配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 17,
  name: '新手入门-第17关',
  description: '挑战第17关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 5), // 使用前5种类型的卡片
  cardsPerType: 12,
  maxSlots: 6,
  timeLimit: 164,
  maxLayers: 4,
  difficulty: 1
};
