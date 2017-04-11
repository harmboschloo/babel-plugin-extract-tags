import _tag from "../../../output/test/fixtures/tagged-callback/given_tag-extra.txt";
import _tag2 from "../../../output/test/fixtures/tagged-callback/given_tag2-extra.txt";
import _tag3 from "../../../output/test/fixtures/tagged-callback/given_tag3.txt";
import "../../../output/test/fixtures/tagged-callback/given_tag4.txt";
import _tag5 from "../../../output/test/fixtures/tagged-callback/given_tag5.txt";
import tagger from "tagger";

tagger(_tag);

tagger.prop(_tag2);

tagger.prop2(_tag3);

tagger.prop3();

tagger.prop4(123, _tag5);