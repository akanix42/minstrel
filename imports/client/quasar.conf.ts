import Vue from 'vue';

import Quasar, {
  Dialog,
  QBtn,
  QCard,
  QCardActions,
  QCardMain,
  QCardMedia,
  QCardSeparator,
  QCardTitle,
  QIcon,
  QInput,
  QItem,
  QItemMain,
  QItemSide,
  QLayout,
  QLayoutDrawer,
  QLayoutHeader,
  QList,
  QListHeader,
  QPage,
  QPageContainer,
  QToolbar,
  QToolbarTitle,
  Ripple
} from 'quasar-framework/dist/quasar.mat';
import 'quasar-framework/dist/umd/quasar.mat.css';

// import 'quasar-extras/animate';
import 'quasar-extras/material-icons/material-icons.css';
import 'quasar-extras/roboto-font';

Vue.use(Quasar, {
  components: [
    QBtn,
    QCard,
    QCardActions,
    QCardMain,
    QCardMedia,
    QCardSeparator,
    QCardTitle,
    QIcon,
    QInput,
    QItem,
    QItemMain,
    QItemSide,
    QLayout,
    QLayoutDrawer,
    QLayoutHeader,
    QList,
    QListHeader,
    QPage,
    QPageContainer,
    QToolbar,
    QToolbarTitle,
  ],
  plugins: [Dialog],
  directives: [Ripple],
});
