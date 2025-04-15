/**
 * 难度2-关卡4配置
 */

import { CARD_TYPES } from '../game/cards.js';

export default {
  id: 4,
  name: '初级挑战-第4关',
  description: '挑战第4关，考验你的技巧',
  cardTypes: CARD_TYPES.slice(0, 6), // 使用前6种类型的卡片
  cardsPerType: 12,
  maxSlots: 7,
  timeLimit: 157,
  maxLayers: 4,
  difficulty: 2
};
