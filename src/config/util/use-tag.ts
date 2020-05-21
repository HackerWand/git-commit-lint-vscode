import { Emoji } from '../git_emoji_zh';

export function use_tag(emoji: Emoji, emoji_enabled: String) {
  const emoji_icon = emoji_enabled === 'enabled' ? emoji.emoji : '';
  return {
    label: `${emoji.tag}${emoji_icon} ${emoji.description}`,
    code: emoji.code,
    emoji: emoji.tag + emoji_icon + '(scope):',
    description: '[' + emoji.name + ']'
  };
}
