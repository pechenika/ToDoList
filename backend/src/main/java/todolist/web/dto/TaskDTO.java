package todolist.web.dto;

import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * This class will hold the task details that will be received
 * as a json input.
 */
@JsonInclude(value = Include.NON_NULL)
public class TaskDTO {

  @NotNull
  @JsonProperty("id")
  private String id;

  @NotNull
  @JsonProperty("value")
  private String value;

  @JsonProperty("isDone")
  private Boolean isDone;

  public TaskDTO(@JsonProperty("id") String id, @JsonProperty("value") String value,
                 @JsonProperty("isDone") Boolean isDone) {
    this.id = id;
    this.value = value;
    this.isDone = isDone;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getValue() {
    return value;
  }

  public void setValue(String value) {
    this.value = value;
  }

  public Boolean getIsDone() {
    return isDone;
  }

  public void setIsDone(Boolean isDone) {
    this.isDone = isDone;
  }
}