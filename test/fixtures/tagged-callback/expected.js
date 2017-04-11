import _tag from "../../../output/test/fixtures/tagged-callback/given_tag-extra.txt";
import _tag2 from "../../../output/test/fixtures/tagged-callback/given_tag2-extra.txt";
import _tag3 from "../../../output/test/fixtures/tagged-callback/given_tag3.txt";
import tagger from "tagger";

tagger(_tag);

tagger.prop(_tag2);

tagger.prop2(_tag3);
