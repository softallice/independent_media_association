import Draft from './views/Articles/Draft';
import Scheduled from './views/Articles/Scheduled';
import Images from './views/Images/Images';
import Published from './views/Articles/Published';
import Settings from './views/Settings/Settings';
import Staff from './views/Staff/Staff';
import Tags from './views/Tags/Tags';
import Articles from './views/Articles/Articles';
import New from './views/Articles/New';

export const viewReducer = {
    drafts: Draft,
    scheduled: Scheduled,
    images: Images,
    published: Published,
    settings: Settings,
    staff: Staff,
    tags: Tags,
    articles: Articles,
    newArticle: New,
  };

  