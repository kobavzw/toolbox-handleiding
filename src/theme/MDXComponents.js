import MDXComponents from '@theme-original/MDXComponents';
import Youtube from '../components/Youtube';
import ImageTitle from '../components/ImageTitle';
import LegacyAction from '../components/LegacyAction';
import Text from '../components/Text';
import IndexGrid from '../components/IndexGrid';
import Thumbnails from '../components/Thumbnails';
import DocCardList from '@theme/DocCardList';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  Youtube,
  ImageTitle,
  LegacyAction,
  Text,
  DocCardList,
  IndexGrid,
  Thumbnails
};