require 'test_helper'

class RudimentaryStrategyTest < ActiveSupport::TestCase
  # Replace this with your real tests.
  test "stringVazia" do
    # Teste basico na classe rudimentary
    testeBasico = RudimentaryStrategy.new("")
    assert_equal "", testeBasico.doPost
  end
end
