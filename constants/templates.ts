export type Template = {
  key: string;
  isEnabled: boolean;
  isSlackDeprecated: boolean;
  title: string;
  emojiKey: string;
  channelTip: string;
};

const templates: Template[] = [
  {
    key: 'dro',
    isEnabled: true,
    isSlackDeprecated: true,
    title: 'DRO / Daily Report',
    emojiKey: 'calendar',
    channelTip: 'Select *DM to yourself* for copy-paste use.',
  },
  {
    key: 'order',
    isEnabled: true,
    isSlackDeprecated: true,
    title: 'Order Summary',
    emojiKey: 'package',
    channelTip: 'Select *DM to yourself* for copy-paste use.',
  },
  {
    key: 'equipment',
    isEnabled: true,
    isSlackDeprecated: false,
    title: 'Equipment Issue',
    emojiKey: 'wrench',
    channelTip: 'Select *site channel* of concern.',
  },
  {
    key: 'signage',
    isEnabled: true,
    isSlackDeprecated: false,
    title: 'Signage Request',
    emojiKey: 'label',
    channelTip: 'Select *#ba_signage_labels* as the channel',
  },
  {
    key: 'trainee',
    isEnabled: true,
    isSlackDeprecated: false,
    title: 'Trainee Recap',
    emojiKey: 'mortar_board',
    channelTip: 'Select *#ba_flex_operators* as the channel',
  },
];

export default templates;
