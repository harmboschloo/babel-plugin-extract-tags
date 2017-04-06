import tagger from 'tagger';
import _tag from '../../../output/test/fixtures/multiple-tagger-modules/given_tag.txt';
import _tag2 from '../../../output/test/fixtures/multiple-tagger-modules/given_tag2.txt';
import taggerA from 'tagger/a';
import taggerB from 'tagger/b';

tagger`
  tagged
`;

taggerB(_tag);

taggerA(_tag2);
