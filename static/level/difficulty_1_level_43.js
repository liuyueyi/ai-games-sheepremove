/**
 * 难度1-关卡43配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 43,
  name: '新手入门-第43关',
  description: '挑战第43关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 8), // 使用前8种类型的卡片
  cardsPerType: 5,
  maxSlots: 8,
  timeLimit: 138,
  maxLayers: 6,
  difficulty: 1
};
