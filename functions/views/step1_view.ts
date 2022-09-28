import inputTemplateBlocks from '../blocks/input-template_blocks.ts';
import inputChannelBlocks from '../blocks/input-channel_blocks.ts';

type Props = {
  channel: string | undefined;
};

const dividerBlock = { type: 'divider' };

const step1View = ({ channel }: Props) => ({
  type: 'modal',
  callback_id: 'step1', // used to route events to handlers
  notify_on_close: true, // triggers view_closed events
  title: {
    type: 'plain_text',
    text: 'Compose Message',
  },
  blocks: [
    ...inputTemplateBlocks,
    dividerBlock,
    ...inputChannelBlocks({ channel }),
  ],
  submit: {
    type: 'plain_text',
    text: 'Next',
  },
});

export default step1View;
