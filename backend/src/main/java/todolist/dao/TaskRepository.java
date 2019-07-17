package todolist.dao;

import org.springframework.stereotype.Repository;
import todolist.domain.TaskDetail;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

@Repository
public interface TaskRepository extends MongoRepository<TaskDetail, String> {
  /**
   * This method finds the task by its id and gives information about it
   *
   * @param id - id of the task for searching.
   * @return returns instance {@link TaskDetail} with information about the task.
   */
  @Query("{ 'id' : {$regex: ?0}}")
  TaskDetail findTaskById(final String id);
}