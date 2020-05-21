import { Emoji } from '../git_emoji_zh';

export function use_name(emoji: Emoji, emoji_enabled: String) {
  const emoji_icon = emoji_enabled === 'enabled' ? emoji.emoji : '';
  return {
    label: `${emoji.tag}${emoji_icon} ${emoji.description}`,
    code: emoji.code,
    emoji: emoji.name + emoji_icon + '(影响范围):',
    description: '[' + emoji.name + ']'
  };
}
